<div id="container" className="flexChild columnParent trackSeven">

    <div id="columnChild46481" className="flexChild restaurantName">
        <h1>{this.props.place.name}</h1>
    </div>

    <div id="columnChild59480" className="flexChild rowParent">
      <div id="rowChild31757" className="flexChild columnParent">
        <div id="columnChild64584" className="flexChild labelText"><h1>{this.props.place.formatted_address}</h1></div>

        <div id="columnChild74073" className="flexChild columnParent">
          <div id="columnChild67924" className="flexChild rowParent">
            <div id="rowChild70892" className="flexChild labelText priceRating rating" ><h2>Rating: {this.props.place.rating}</h2></div>

            <div id="rowChild27798" className="flexChild labelText priceRating price"><h2>Price: {this.price(this.props.place.price_level)}</h2></div>
          </div>



          <div id="columnChild89627" className="flexChild columnParent labelText">
            <h1 className="commentAreaClass">Comment</h1>
          <form action="" id="usrform"> </form>
          <textarea rows="5" cols="50" placeholder="COMMENT. HERE">
           <input type="submit"></input>


          </textarea>
          </div>
        </div>
      </div>

      <div id="rowChild78008" className="flexChild">
          <iframe className="mapcontain"
          width="350px"
          height="350px"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${this.props.place.name}${this.props.place.formatted_address}&center=${this.props.place.geometry.location.lat},${this.props.place.geometry.location.lng}`} allowFullScreen>
        </iframe>
         <div>
          <favoritebutton id="star">
            <label for="favoriteButton" placeholder="FAVORIT"></label>
            <input id="favoriteButton" type="submit" value="FAVORIT"></input>
          </favoritebutton>

        </div>
    </div>
  </div>


</div>



