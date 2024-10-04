import eventService from '../services/eventService.js';
import ticketService from '../services/ticketService.js';
import registrationService from '../services/registrationService.js';
import eventParametersService from '../services/eventParametersService.js';
import categoryService from '../services/categoryService.js';
import ageService from '../services/ageService.js';
import eventPriceService from '../services/eventPriceService.js';

class EventController {
  async createEvent(req, res, next) {
    try {
      const event = await eventService.createEvent(req.body);
      res.status(201).json(event);
    } catch (error) {
      //console.log(error)
      next(error);
    }
  }

  async getEventById(req, res, next) {
    try {
      const event = await eventService.getEventById(req.params.id);
      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  async getAllEvents(req, res, next) {
    try {
      const events = await eventService.getAllEvents();

      //add eventPrice to each event
      for (let i = 0; i < events.length; i++) {
        const eventPrice = await eventPriceService.getEventPriceByEventId(events[i].event_id);
        //console.log(eventPrice);
        // Check if eventPrice and eventPrice.dataValues exist before accessing price
        if (eventPrice) {
          events[i].dataValues.price = eventPrice[0].dataValues.price;
        } else {
          // Handle the case where eventPrice or eventPrice.dataValues is undefined
          //console.log(`Price data unavailable for event ID: ${events[i].event_id}`);
          // Optionally set a default price or leave it undefined
          // events[i].price = 'Default price or leave as is';
        }
      }
      //console.log(events)
      res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  }

  async getEventsByUserId(req, res, next) {
    //first search all the tickets of the user  ticketController.getTicketsByUserId
    //then search all the events of the tickets
    //console.log(req.params.userId)
    try {
      const tickets = await ticketService.getTicketsByUserId(req.params.userId);


      const listEvents = [...new Set(tickets.map(ticket => ticket.dataValues.event_id))];
      //console.log(listEvents);
      const events = await eventService.getEventsByIds(listEvents);
      
      res.status(200).json({ events, tickets });
    } catch (error) {
      next(error);
    }
  }

  async getEventsTicketsRegistrationsByUserId(req, res, next) {
    //first search all the tickets of the user  ticketController.getTicketsByUserId
    //then search all the events of the tickets
    //console.log(req.params.userId)
    try {
      const tickets = await ticketService.getTicketsByUserId(req.params.userId);
      const registrations = await registrationService.getRegistrationsByUser(req.params.userId);
  
      const ticketEventIds = [...new Set(tickets.map(ticket => ticket.dataValues.event_id))];
      const registrationEventIds = [...new Set(registrations.map(registration => registration.dataValues.event_id))];
  
      const uniqueEventIds = [...new Set([...ticketEventIds, ...registrationEventIds])];
  
      const events = await eventService.getEventsByIds(uniqueEventIds);
  
      res.status(200).json({ events, tickets, registrations });
    } catch (error) {
      next(error);
    }
  }


  async updateEvent(req, res, next) {
    try {
      const event = await eventService.updateEvent(req.params.id, req.body);
      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  async deleteEvent(req, res, next) {
    try {
      await eventService.deleteEvent(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async getParameterByEventId(req, res, next) {
    try {
      const eventParameters = await eventParametersService.getEventParametersByEvents(req.params.eventId);

      for (let i = 0; i < eventParameters.length; i++) {
        const categoryDetails = await categoryService.getCategoryById(eventParameters[i].category_id);
        const ageDetails = await ageService.getAgeById(eventParameters[i].age_id);

        eventParameters[i].dataValues.category = categoryDetails.name;
        eventParameters[i].dataValues.age = ageDetails.value;

        delete eventParameters[i].dataValues.category_id;
        delete eventParameters[i].dataValues.age_id;
        delete eventParameters[i].dataValues.event_id;
        delete eventParameters[i].dataValues.event_parameters_id;
      }

      

      res.status(200).json(eventParameters);
    } catch (error) {
      console.log(error)
      next(error);
    }
  }

}

export default new EventController();
