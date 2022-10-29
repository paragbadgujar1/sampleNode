
class DatabaseHelper {
  async create (model, param) {
    return model.create(param)
  }

  async findById (model, param) {
    return model.findById(param).lean()
  }

  async findByIdAndUpdate (model, id, param) {
    return model.findByIdAndUpdate(id, param)
  }

  async findByIdAndDelete (model, id) {
    return model.findByIdAndDelete(id)
  }

  async aggregate (model, aggregateQuery) {
    return model.aggregate(aggregateQuery).allowDiskUse(true)
  }

  async distinct (model, params) {
    return model.distinct(params).lean()
  }

  async find (model, query, sort = {}) {
    return model.find(query).sort(sort)
  }

  async findOne (model, query, sort = {}) {
    return model.findOne(query).sort(sort)
  }

  async updateOne (model, id, param) {
    return model.updateOne(id, param)
  }

  async updateMany (model, id, param) {
    return model.updateMany(id, param)
  }

  async deleteMany (model, id) {
    return model.deleteMany(id)
  }

  async populate (model, id, param, populate) {
    return model.findOne(id, param).populate(populate).lean()
  }

  async populatebyId (model, id, param, populate) {
    return model.findById(id, param).populate(populate).lean()
  }

  async findOneAndUpdate (model, filter, update, opts = {}) {
    return model.findOneAndUpdate(filter, update, opts)
  }

  async count (model, filter) {
    return model.countDocuments(filter).lean()
  }

  async exists (model, filter) {
    return model.exists(filter)
  }
}

const databaseHelper = new DatabaseHelper()

module.exports = databaseHelper
