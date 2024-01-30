import Sequelize, { DataTypes, Model } from 'sequelize'
import util from 'util'



const sequelize = new Sequelize('postgresql:///sticker_app')

// sequelize.query(`
//     ALTER TABLE cart_items 
//     COLUMN tshirts varvhar;
// `);

class Pack extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

Pack.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        image: { 
            type: DataTypes.STRING,
            // type: DataTypes.BLOB('long'),
            allowNull: true 
        }

    },
    {
        tableName: 'packs',
        sequelize: sequelize,
        timestamps: false
    }
    
)



class Sticker extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

Sticker.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        image: { 
            type: DataTypes.STRING,
            // type: DataTypes.BLOB('long'),
            allowNull: true 
        }
    },
    {
        tableName: 'stickers',
        sequelize: sequelize,
        timestamps: false
    }
)



class CartItem extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

CartItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'cart_items',
        sequelize: sequelize,
        timestamps: false
    }
)



class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: 'users',
        sequelize: sequelize,
        timestamps: false
    }
)

Pack.hasMany(Sticker, { foreignKey: 'packId' });
Sticker.belongsTo(Pack, { foreignKey: 'packId' });

Sticker.hasMany(CartItem, { foreignKey: 'stickerId' });
CartItem.belongsTo(Sticker, { foreignKey: 'stickerId' });

Pack.hasMany(CartItem, { foreignKey: 'packId' });
CartItem.belongsTo(Pack, { foreignKey: 'packId' });

User.hasMany(CartItem, { foreignKey: 'userId' });
CartItem.belongsTo(User, { foreignKey: 'userId' });


// CONNECT pack to stickers


export { sequelize, Sticker, Pack,  CartItem, User }