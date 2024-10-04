import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';


const Style = sequelize.define('Style', {
    style_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'styles',
    timestamps: false,
});

export default Style;
