import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const AthleteCategories = sequelize.define('AthleteCategory', {
    athlete_categories_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    athlete_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    category: {
        type: DataTypes.UUID,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
    }, {
    tableName: 'athlete_categories',
    timestamps: false,
    });

export default AthleteCategories;