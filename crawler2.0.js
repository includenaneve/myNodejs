const http = require('http');
const cheerio = require('cheerio'); 
const url = 'http://www.imooc.com/u/260858/courses';

const html = http.get(url,(res)=>{
    let html = '';
    res.on('data',(data) => html+=data);
    res.on('end',() => getDataWithLevel1(html));
    res.on('error',()=>console.log('error'))
})
const getDataWithLevel1 = html => {
    const $ = cheerio.load(html);
    let dataArr = $('.course-list-cont').map((index,elem)=>{
        return {
            title:$(elem).find('h3 a').text(),
            link:$(elem).find('h3 a').attr('href'),
            schedule:$(elem).find('.study-points span').eq(0).text(),
            cost:$(elem).find('.study-points span').eq(1).text()
        }
    }).toArray();
    console.log(`你最近学习在慕课网学习的课程详情:\n`);
    dataArr.forEach((elem)=>{
        try{
        console.log(`${elem.title}\n进度:${elem.schedule}\n花费时间:${elem.cost}\n\n`);
        }
        catch(e){
            console.log(e);
        }
    });
}
