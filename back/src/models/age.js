import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';


const Age = sequelize.define('Age', {
    age_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'ages',
    timestamps: false,
});

export default Age;
