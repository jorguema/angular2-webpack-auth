export class Country {
    constructor(Id, Code, Description, TypeId, TypeCode) {
        this.id = Id;
        this.code = Code;
        this.description = Description;
        this.typeId = TypeId;
        this.typeCode = TypeCode;
    }
}

export class CountryHelper {

    static mapToObject(result) {
        return new Country(result.Id, result.Code, result.Description, result.TypeId, result.TypeCode);
    }

    static mapToObjectList(result) {
        var items = [];
        result.Data.forEach(item => {
            items.push(this.mapToObject(item));
        });

        return items;
    }
}