"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_to_csv_1 = require("./export-to-csv");
var mockData = [
    {
        name: "Test 1",
        age: 13,
        average: 8.2,
        approved: true,
        description: "Test 1 description"
    },
    {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        approved: true,
        description: "Test 2 description"
    },
    {
        name: 'Test 4',
        age: 10,
        average: 8.2,
        approved: true,
        description: "Test 3 description"
    },
];
describe('ExportToCsv', function () {
    it('should create a comma seperated string', function () {
        var options = {
            title: "Test Csv",
            useBom: true,
            useKeysAsHeaders: true,
        };
        var exportToCsvInstance = new export_to_csv_1.ExportToCsv(options);
        var string = exportToCsvInstance.generateCsv(mockData, true);
        expect(string).toBeTruthy(typeof string === 'string');
    });
    it('should use keys of first object in collection as headers', function () {
        var options = {
            title: "Test Csv",
            useBom: true,
            useKeysAsHeaders: true,
        };
        var exportToCsvInstance = new export_to_csv_1.ExportToCsv(options);
        var string = exportToCsvInstance.generateCsv(mockData, true);
        var firstLine = string.split('\n')[0];
        var keys = firstLine.split(',').map(function (s) { return s.trim(); });
        var mockDataKeys = Object.keys(mockData[0]);
        expect(keys).toEqual(mockDataKeys);
    });
    // it('should properly overwrite default options through contructor', () => {
    //     const exportToCsvInstance = new ExportToCsv();
    //     const defaults = { ...exportToCsvInstance.options };
    // });
    it('should initiate download through spawned browser', function () {
        if (!window) {
            pending('it should only initiate download when run in browser context');
        }
        var options = {
            title: "Test Csv",
            useBom: true,
            useKeysAsHeaders: true
        };
        var exportToCsvInstance = new export_to_csv_1.ExportToCsv(options);
        exportToCsvInstance.generateCsv(mockData);
    });
});
describe('ExportToCsv As A Text File', function () {
    it('should create a comma seperated string', function () {
        var options = {
            title: "Test Csv 1",
            useTextFile: true,
            useBom: true,
            useKeysAsHeaders: true,
        };
        var exportToCsvInstance = new export_to_csv_1.ExportToCsv(options);
        var string = exportToCsvInstance.generateCsv(mockData, true);
        expect(string).toBeTruthy(typeof string === 'string');
    });
    it('should use keys of first object in collection as headers', function () {
        var options = {
            filename: "Test Csv 2",
            useTextFile: true,
            useBom: true,
            useKeysAsHeaders: true,
        };
        var exportToCsvInstance = new export_to_csv_1.ExportToCsv(options);
        var string = exportToCsvInstance.generateCsv(mockData, true);
        var firstLine = string.split('\n')[0];
        var keys = firstLine.split(',').map(function (s) { return s.trim(); });
        var mockDataKeys = Object.keys(mockData[0]);
        expect(keys).toEqual(mockDataKeys);
    });
    it('should initiate download through spawned browser', function () {
        if (!window) {
            pending('it should only initiate download when run in browser context');
        }
        var options = {
            filename: "Test Csv 3",
            useTextFile: true,
            useBom: true,
            useKeysAsHeaders: true
        };
        var exportToCsvInstance = new export_to_csv_1.ExportToCsv(options);
        exportToCsvInstance.generateCsv(mockData);
    });
});
//# sourceMappingURL=export-to-csv.spec.js.map