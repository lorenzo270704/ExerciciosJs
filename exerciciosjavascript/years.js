<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const fs = require('fs');
        const input = fs.readFileSync('/dev/stdin', 'utf8');
        const ageInDays = parseInt(input.trim());

        const years = Math.floor(ageInDays / 365);  
        const months = Math.floor((ageInDays % 365) / 30);
        const days = ageInDays % 30;

        console.log(`${years} ano(s)`);
        console.log(`${months} mes(es)`);
        console.log(`${days} dia(s)`);
    </script>
</body>
</html>