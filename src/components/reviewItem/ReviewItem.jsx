import productImg from "../../img/hero-image.jpg";
const ReviewItem = ({item, deleteItem}) => {

  return (
    <div className='flex items-center gap-3 border-solid border-2 border-[#f0e9e9] flex-1 p-2 rounded-lg'>
        <div><img className='w-[50px] h-[50px]' src={item.img} alt="Product Image" /></div>
        <div>
          <p className="font-bold">Ultraboost 22 Shoes</p>
          <p>Price: <span className="text-[#FF9900]">${item.price}</span> </p>
          <p>Shipping Charge : <span className="text-[#FF9900]">${item.shipping}</span> </p>
        </div>
        <div className='flex-1 text-right'><p onClick={()=>deleteItem(item.id)} className='cursor-pointer bg-[#eb575749] rounded-full inline-block px-2 py-1'><i class="fa-solid fa-trash-can text-[#EB5757]"></i></p></div>
      </div>
  )
}

export default ReviewItem