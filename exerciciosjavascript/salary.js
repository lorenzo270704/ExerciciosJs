
        const fs = require('fs');
        const input = fs.readFileSync('/dev/stdin', 'utf8');
        const lines = input.split('\n');

        const employeeNumber = parseInt(lines[0]);
        const workedHours = parseInt(lines[1]);
        const hourlyRate = parseFloat(lines[2]);

        const salary = workedHours * hourlyRate;

        console.log(`NUMBER = ${employeeNumber}`);
        console.log(`SALARY = U$ ${salary.toFixed(2)}`);

