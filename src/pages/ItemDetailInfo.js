import React from "react";
import styles from "./ItemDetailInfo.module.css";
import { useParams } from "react-router-dom";
import DownItem from "../components/contents/ItemInfo/DownItem";
import UpItem from "../components/contents/ItemInfo/UpItem";
import ItemIntro from "../components/contents/ItemInfo/ItemIntro";

const ItemDetailInfo = ({ 
    onErrorImg,
    item
}) => {
    let { id } = useParams();
    const itemObject = item.data;
    const itemArray = Object.values(itemObject);
    // image.full에 id가 포함되어 있는 것을 찾는다.
    let findItemObject = itemArray.find(item => item.image.full.includes(id));

    console.log(findItemObject);

    return (
        <div className={styles['itemDetailInfo-Container']}>
            <section className={styles['itemDetail-headerInfo']}>
                <ItemIntro
                    onErrorImg={onErrorImg}
                    findItemObject={findItemObject}
                />
            </section> 

            <section className={styles['itemDetail-mainInfo']}>
                {findItemObject.hasOwnProperty('from') ?
                    <DownItem 
                        onErrorImg={onErrorImg}
                        itemObject={itemObject}
                        findItemObject={findItemObject}
                    /> : (
                        <>
                            <h3>하위 아이템</h3>
                            <p>최하위 아이템 입니다.</p>
                        </>
                    )
                }
                {findItemObject.hasOwnProperty('into') ?
                    <UpItem 
                        onErrorImg={onErrorImg}
                        itemObject={itemObject}
                        findItemObject={findItemObject}
                    /> : (
                        <>
                            <h3>상위 아이템</h3>
                            <p>최상위 아이템 입니다.</p>
                        </>
                    )
                }
            </section>
        </div>
    )
}

export default ItemDetailInfo;