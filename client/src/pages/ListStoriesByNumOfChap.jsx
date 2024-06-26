import StoryByChapterItem from "@components/StoryByChapItem";

const fakeList = [
  //title, chap, hot, completed, thumbnail, id, description
    {
        id: 1,
        title: 'Võ Thần',
        chap: 100,
        hot:true,
        completed: false,
        thumbnail: 'https://truyenhay.com/images/265/396/l39z-cung-chieu-co-vo-quan-nhan.jpg',
        description: 'Võ Thần là một câu chuyện võ hiệp huyền ảo, kể về một thiếu niên tên là Lý Thần, một kẻ không có bố mẹ, không có quê hương, không có tên tuổi, không có quyền thế, không có võ công, không có tài năng, không có tài lẻ, không có gì cả. Chỉ có một thân phận là một kẻ không có gì cả.'
    
    },
    {
        id: 2,
        title: 'VÔ TẬN ĐAN ĐIỀN',
        chap: 200,
        hot:true,
        completed: false,
        thumbnail: 'https://truyenhay.com/images/217/300/qhuj-vo-tan-dan-dien.jpeg',
        description: 'Khí Hải là nơi tu luyện giả nạp khí căn bản, là nơi trực tiếp chứa đan điền, ảnh hưởng đến thiên phú, hóa khí trụ cột. Thiên phú cao hơn người thì một cái Khí Hải thường có mấy cái đan điền. Đan điền càng nhiều, thiên phú càng cao, tốc độ nạp khí, hóa khí lại càng nhanh. Người cả đời Khí Hải có bao nhiêu đan điền đều là trời sinh sao có vậy. Nhưng, nếu có pháp quyết tu luyện tăng số đan điền lên thì sao?'
    },
    {
        id: 3,
        title: 'THIÊN ĐẠI CHÍ TÔN',
        chap: 300,
        hot:true,
        completed: true,
        thumbnail: 'https://truyenhay.com/images/217/300/oblm-cau-ma.jpg',
        description: 'Thiên Đại Chí Tôn là một câu chuyện võ hiệp huyền ảo, kể về một thiếu niên tên là Lý Thần, một kẻ không có bố mẹ, không có quê hương, không có tên tuổi, không có quyền thế, không có võ công, không có tài năng, không có tài lẻ, không có gì cả. Chỉ có một thân phận là một kẻ không có gì cả.'

    }
]

function ListStoriesByNumOfChap() {
    return <div>
        <h2 className="font-semibold text-xl my-6">100 - 500 Chương</h2>

        <div className="mx-auto min-w-[1200px] flex flex-col gap-7">
            {
                fakeList.map(story => {
                    return <StoryByChapterItem key={story.id} story={story} />
                })
            }
        </div>

    </div>
}

export default ListStoriesByNumOfChap;