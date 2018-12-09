var personalitySQL = {  
    //insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
    queryAll:'SELECT * FROM wordrate',  
    getTopicById:'SELECT * FROM topicanalysis WHERE name = ? ',
    getWordRateById:'SELECT * FROM wordrate WHERE name = ? ',
    getSocialNetById:'SELECT * FROM socialnet WHERE name = ? ',
    getInformationById:'SELECT * FROM Users WHERE userName = ? ',
    changeInformationById:'UPDATE Users SET password = ? WHERE userName = ? ',
    selectAnalysisResultById:'SELECT * FROM 向量结果 WHERE 微博昵称 = ?  ',
    fuzzySearch:'SELECT 微博昵称 FROM 向量结果 WHERE 微博昵称 LIKE ?',
    searchTempStorage:'SELECT * FROM temporarystorage WHERE name = ? ',
    insertTempStorage:'INSERT INTO temporarystorage(name,openness,conscientiousness,extraversion,agreeableness,neuroticism) VALUES(?,?,?,?,?,?)',
  };
module.exports = personalitySQL;

