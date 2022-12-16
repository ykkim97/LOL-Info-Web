import React, { useEffect, useState } from "react";

const RotationChampions = ({
    onErrorImg,
    championObjectArray,
    rotationChampion,
}) => {
    
    console.log(championObjectArray, "championObjectArray")
    console.log(rotationChampion.freeChampionIds, "rotationChampion")

    return (
        <>
            <h3>로테이션챔피언</h3>
            {/* TODO: rotationChampion이 아마도 undefined이기 때문에 출력되지 않는 문제가 발생한 듯. */}
            {rotationChampion.freeChampionIds?.map(id => {
                championObjectArray.map((obj, index) => {
                    if (Number(obj.key) === id) {
                        return <div>
                            <img 
                                src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${obj.image.full}`} 
                                onError={onErrorImg}
                                alt={id}
                            />
                        </div>
                    } 
                })
            })}
        </>
    )
}

export default RotationChampions;