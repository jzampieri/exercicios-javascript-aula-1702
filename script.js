        // =============================
        // 1. Criando datas com o objeto Date
        // =============================
        console.log("=== Manipulação de Datas com Date ===");
        // Criando uma data com a data e hora atuais
        const agora = new Date();
        console.log("Data e hora atuais:", agora);
        // Criando uma data específica (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo)
        const dataEspecifica = new Date(2025, 1, 16, 14, 30, 0);
        console.log("Data específica:", dataEspecifica);
        // Extraindo informações da data
        console.log("Ano:", dataEspecifica.getFullYear());
        console.log("Mês:", dataEspecifica.getMonth() + 1); // +1 pois os meses começam do 0
        console.log("Dia:", dataEspecifica.getDate());
        console.log("Dia da semana:", dataEspecifica.getDay()); // 0 = Domingo, 1 = Segunda...
        // Formatando uma data para um formato mais legível
        console.log("Data formatada (pt-BR):", dataEspecifica.toLocaleDateString("pt-BR"));
        // =============================
        // 2. Adicionando e Subtraindo Datas
        // =============================
        let novaData = new Date();
        novaData.setDate(novaData.getDate() + 7); // Adiciona 7 dias
        console.log("Data +7 dias:", novaData.toLocaleDateString("pt-BR"));
        novaData.setMonth(novaData.getMonth() - 1); // Subtrai 1 mês
        console.log("Data -1 mês:", novaData.toLocaleDateString("pt-BR"));
        // =============================
        // 3. Manipulação de Datas com Moment.js
        // =============================
        console.log("=== Manipulação de Datas com Moment.js ===");
        // Criando uma data atual com Moment.js
        const momentAgora = moment();
        console.log("Data e hora atuais (Moment.js):", momentAgora.format());
        // Criando uma data específica
        const momentData = moment("2025-02-16", "YYYY-MM-DD");
        console.log("Data específica (Moment.js):", momentData.format("DD/MM/YYYY"));
        // Adicionando e Subtraindo Datas com Moment.js
        console.log("Data +10 dias (Moment.js):", momentData.add(10, "days").format("DD/MM/YYYY"));
        console.log("Data -2 meses (Moment.js):", momentData.subtract(2, "months").format("DD/MM/YYYY"));
        // Comparação de Datas com Moment.js
        const data1 = moment("2025-02-16");
        const data2 = moment("2025-02-20");
        console.log("data1 é antes de data2?", data1.isBefore(data2));
        console.log("data1 é depois de data2?", data1.isAfter(data2));
        console.log("data1 é igual a data2?", data1.isSame(data2));
        // Convertendo para Timestamp
        console.log("Timestamp da data (Moment.js):", momentData.valueOf());