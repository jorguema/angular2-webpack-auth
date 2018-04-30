export class Port {
    constructor(Id, Code, Description, CountryId, CountryCode, TypeId, TypeCode) {
        this.id = Id;
        this.code = Code;
        this.description = Description;
        this.countryId = CountryId;
        this.countryCode = CountryCode;
        this.typeId = TypeId;
        this.typeCode = TypeCode;
    }
}

export class PortHelper {

    static mapToObject(result) {
        return new Port(result.Id, result.Code, result.Description, result.CountryId, result.CountryCode, result.TypeId, result.typeCode);
    }

    static mapToObjectList(result) {
        var items = [];
        result.Data.forEach(item => {
            items.push(this.mapToObject(item));
        });

        return items;
    }
}