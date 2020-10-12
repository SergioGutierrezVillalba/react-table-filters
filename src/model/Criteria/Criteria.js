export default class Criteria {
  constructor({ name, field, value, entity = null }) {
    /**
     * Name that appears in the DOM
     */
    this.name = name;

    /**
     * Field that the object will filter
     */
    this.field = field;

    /**
     * Value that the field should have in order to be filtered
     */
    this.value = value;

    /**
     * Model used to construct the object
     */
    this.entity = entity;
  }

  /**
   * Matches element to provided value for the field designed
   * @param {Object to match against} Object
   */
  // TODO: Change name to 'matches'
  filter(object) {
    if (this.entity && !(this.entity instanceof this.entity)) {
      /**
       * If provided an entity, objects of the array filtered should be of that type
       */
      throw new Error(
        `Provided class ${this.entity.constructor.name} but instead received ${object.constructor.name}`
      );
    }

    const deepField = this.field.split(".");
    const levels = deepField;

    let finalValue;

    if (levels.length > 0) {
      finalValue = object;
      for (let level of levels) {
        finalValue = finalValue[level];
      }
    } else {
      finalValue = object[this.field];
    }

    if (finalValue) {
      return finalValue.toUpperCase() === this.value.toUpperCase();
    }
  }
}
