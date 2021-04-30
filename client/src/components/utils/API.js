export default {
    getAll: function(){
        return fetch('/discover', {
            method: 'GET',
        }).then(res => {
            return res.json();
            
        }).then(data => {
            const mangas = data;
            return mangas.mK.map(manga => {
                return{
                   id: manga.id,
                name: manga.name,
                author: manga.author,
                desc: manga.desc,
                img: manga.img,
                chapters: manga.chapters
                }
                
                
            })
        })
    }
}