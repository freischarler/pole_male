import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const EventParameters = sequelize.define('EventParameters', {
    event_parameters_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    event_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'events', // name of your user model
            key: 'event_id'
        }
    },
    category_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'categories', // name of your user model
            key: 'category_id'
        }
        },
    age_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'ages', // name of your user model
            key: 'age_id'
        }
    },
},{
    tableName: 'event_parameters',
    timestamps: false,
});

export default EventParameters;