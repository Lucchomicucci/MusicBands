import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { AuthContext } from "../../context/authcontext"

export const InforBand = (props) => {
    const [bandInfo, setBandInfo] = useState();
    const { bands } = useContext(AuthContext);
    const { infoband } = useParams();

    useEffect(() => {
        const bandInfoToShow = bands.find(band => band.name == infoband)
        setBandInfo(bandInfoToShow)
        console.log(bandInfoToShow)
    }, [infoband])

    return (
        <>

            {!!bandInfo ?
                <div class="card resultadobusqueda">
                    <div class="card-body">
                        <h5 class="card-title">{bandInfo.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{bandInfo.year}</h6>
                    </div>
                </div>
                :
                <p>Cargando</p>
            }
        </>
    )
}