import './OrderReview.css';
import ReviewCart from '../reviewCart/ReviewCart';
import ReviewItem from '../reviewItem/ReviewItem';
import { useContext } from 'react';
import { itemsContext } from '../../Root';
import removeItemDB from '../../../storage/removeItemDB';
const OrderReview = () => {
  const {items, setItems} = useContext(itemsContext);
  const deleteItem = (id)=>{
    const restItems = items.filter(item => item.id !== id);
    setItems([...restItems])
    removeItemDB(id);
    console.log(restItems)
  }
  return (
    <div className='flex justify-between lg:mx-32 mt-10 gap-20'>
      <div className='flex-1 space-y-6'>
         {
          items.map(item => <ReviewItem key={item.id} item={item} deleteItem={deleteItem}/>)
         }
      </div>
      <ReviewCart items={items} setItems={setItems}/>
    </div>
  )
}

export default OrderReview