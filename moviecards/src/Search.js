import './Search.css';
function Search({onSearch}){
  return(
    <div className="searchbar">
    <input type="email" class="form-control w-90mike" id="searchinput" placeholder="search"/>
<button class="btn11" onClick={()=>
onSearch(document.getElementById("searchinput").value)}><i class="fa">&#xf002;</i></button>
</div>);
}
 export default Search;
