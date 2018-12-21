var program = require('commander');
var csv = require('csv-manipulator');
var jp = require('jsonpath');

program
    .version('0.0.1')
    .option('-c, --column [columname]', 'column you want to alter')
    .option('-f, --file [filename]', 'file you want to alter')
    .option('-e, --entity [entityname]', 'the property you want to extract')
    .parse(process.argv);

if (!program.column) {
    console.log('You must specify a column');
    program.outputHelp();
    process.exit(1);
}

var query = {
    column: program.column,
    file: program.file,
    entity: program.entity,
};

function manipulateCsv(query) {

    csv.updateRows(`${query.file}.csv`, function (row) {
        let value = row[query.column];

        try {
            const jsonObject = JSON
                .parse(value);

            if (jsonObject) {
                var extractedValue = jp.query(jsonObject, `$..${query.entity}`);

                if (extractedValue) {
                    row[query.entity] = extractedValue[0];
                }
            }
        } catch (e) {
            console.log('error my dudes, no json in the column');
        }
    }, function (err, result) {
        if (err) {
            console.log(err.stack);
            return;
        }

        console.log('Processed ' + result.totalRows + ' rows');
    });
}

manipulateCsv(query);

