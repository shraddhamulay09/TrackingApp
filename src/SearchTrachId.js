import react from 'react';
import './css/Search.css';
function SearchTrackId(){

    return(
      <div class="container">
      <div class="container__item">
       <h3>Track</h3>
          <input type="text" class="form__field" placeholder="Tracking ID" />
          <button type="button" class="searchtrackidbtn uppercase">Track</button>
    
      </div>
      
      <div class="container__item container__item--bottom">
        
      </div>
    </div>
    )
}
export default SearchTrackId;