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
        const input = fs.readFileSync('/dev/stdin', 'utf8').trim().toLowerCase().split('\n');

        const animalTable = {
            'vertebrado': {
                'ave': {
                'onivoro': 'pomba',
                'carnivoro': 'aguia',
        },
            'mamifero': {
                'onivoro': 'homem',
                'herbivoro': 'vaca'
        }
    },
            'invertebrado': {
                'inseto': {
                'hematofago': 'pulga',
                'herbivoro': 'lagarta'
        },
            'anelideo': {
                'onivoro': 'minhoca',
                'hematofago': 'sanguessuga'
        }
    }
};

    const word1 = input[0];
    const word2 = input[1];
    const word3 = input[2];

    const animal = animalTable[word1][word2][word3];
    console.log(animal);
    </script>
</body>
</html>