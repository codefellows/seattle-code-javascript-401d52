'use strict';

/** Class representing a generic MongoDB model. */
class Model {

  /**
   * Model Constructor
   * @param schema {object} - MongoDB schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * JSON Schema
   * @returns {*}
   */
  jsonSchema() {
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  /**
   * Retrieves one or more records
   * @param _id {string} optional MongoDB record id
   * @returns {*}
   */
  get(queryObject = {}) {
    return this.schema.find(queryObject);
  }

  /**
   * Create a new record
   * @param record {object} matches the format of the schema
   * @returns {*}
   */
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   * Replaces a record in the database
   * @param _id {string} MongoDB Record ID
   * @param record {object} The record data to replace. ID is a required field
   * @returns {*}
   */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**
   * Deletes a recod in the model
   * @param _id {string} MongoDB Record ID
   * @returns {*}
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
