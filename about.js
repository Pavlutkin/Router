class About {
    render() {
        const root = document.getElementById('root');

        const text = document.createElement('p');
        const back = document.createElement('a');
        back.innerHTML = 'Назад';
        back.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
        back.style = 'margin-top: 10px; color:green; text-decoration:underline; cursor:pointer';
        text.innerHTML = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.';
        root.append(text, back);
    }
}

const AboutPage = new About();
export default AboutPage;