import React, {Component} from 'react';
import ItemCard from './ItemCard';

class ItemList extends Component {
    render() {
        return (
            <div class="container-flexbox-ItemList">
                {/* testing card layout*/}
                <ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard />
                <ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard />
            </div>
        )
    }
}

export default ItemList;

