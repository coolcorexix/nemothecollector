import React from 'react';


export const data = {
    imageUri: 'https://i.imgur.com/oFgaLSO.jpeg',
    name: 'Brownie nhân hạnh (phúc)',
    ingredient: 'Chocolate, hạnh nhân',
    productionDate:  'thứ Ba, 07/04/2021',
    bestBefore: 'thứ Hai, 12/04/2021',
    // *todo add real size here
    price: '35,000đ / 1 mẩu 5cm x 5cm',
}

function EatItem(props) {
    return (
        <div className='w-6/12 text-lg'>
            <img
                className='object-contain mb-1'
                src={data.imageUri}
            />
            <div className='font-bold text-2xl'>
                {data.name}
            </div>
            <div className='italic'>
                chứa {data.ingredient}
            </div>
            <div>
                Ra lò ngày {data.productionDate}
            </div>
            <div>
                Dùng trước ngày <span style={{
                    textDecorationStyle: 'wavy',
                }} className='underline'>{data.bestBefore}</span>
            </div>
            <div>
                {data.price}
            </div>
            
        </div>
    );
}

export default EatItem;