import Styles from "../Styles/List.module.css"
function CategoryItem({url,title}){
    return(
        <div className={Styles.card}>
            <img src={url} alt="" />
            <div>
                {title}
            </div>
        </div>
    )
}
export default CategoryItem;