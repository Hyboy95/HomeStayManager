const BaseModel = require('./base.model')

class HomeStayModel extends BaseModel {
    async getAllHomestay() {
        let sql = `SELECT h.id, h.name, h.price, c.nameCity FROM Homestay as h
        join City as c on h.idCity = c.idCity`;
        return await this.querySql(sql);
    }

    async getDetailHomestay(id) {
        let sql = `SELECT h.id, h.name, h.num_bedroom, h.num_badroom, h.price, h.descript, c.nameCity FROM Homestay as h
        join City as c on h.idCity = c.idCity where h.id = ${id}`;
        return await this.querySql(sql);
    }

    async addHomeStay(name, idCity, num_bedroom, num_badroom, price, descript) {
        let sql = `insert into Homestay (name, idCity, num_bedroom, num_badroom, price, descript) values
        ('${name}', ${idCity}, ${num_bedroom}, ${num_badroom}, ${price}, '${descript}')`;
        await this.querySql(sql);
    }
}

module.exports = new HomeStayModel;