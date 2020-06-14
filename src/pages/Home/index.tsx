import React, { useEffect, useState} from 'react'
import CenteredBlock from '../../components/CenteredBlock'
import axios from 'axios'

import {IBGECity, IBGEUf} from '../../models'

import './styles.css'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const isUFDefined = () => uf !== ''
    const isLocalidadeDefined = () => localidade !== 0
    const isPeriodoDefined = () => periodo !== ''

    let history = useHistory()

    const [uf, setUf] = useState<string>('')
    const [ufs, setUfs] = useState<IBGEUf[]>([])
    const [cities, setCities] = useState<IBGECity[]>([])
    const [localidade, setLocalidade] = useState(0)
    const [periodos] = useState([
        {code: "202004", name: "abril 2020"},
        {code: "202005", name: "maio 2020"},
        {code: "202006", name: "junho 2020"},
    ])
    const [periodo, setPeriodo] = useState('')

    useEffect(() => {
        axios.get<IBGEUf[]>('http://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then((res) => {
                if (res.status === 200) {
                    setUfs(res.data.sort((a, b) => a.nome.localeCompare(b.nome)))
                } else {
                    toast.error("Erro no servidor ao buscar os estados")
                }
            })
            .catch((e) => {
                toast.error("Erro ao buscar os estados. Abra o console para mais detalhes")
                console.log(e)
            })
    }, [])

    useEffect(() => {
        if (uf === '') {
            return
        }
        axios.get<IBGECity[]>(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then((res) => {
                if (res.status === 200) {
                    setCities(res.data)
                } else {
                    toast.error("Erro no servidor ao buscar as cidades")
                }
            })
            .catch((e) => {
                toast.error("Erro ao buscar as cidades. Abra o console para mais detalhes")
                console.log(e)
            })
    }, [uf])

    return (
        <div>
            <CenteredBlock>
                <form>
                    <h1>uf</h1>
                    <select 
                        name="uf" 
                        id="uf" 
                        autoFocus 
                        required
                        onChange={(ev) => setUf(ev.target.value)}
                    >
                        <option selected key='' value=''>selecione um estado</option>
                        {ufs.map((cur) => 
                            <option key={cur.sigla}
                                value={cur.sigla} 
                            >{cur.nome}</option>
                        )}
                    </select>
                    {isUFDefined() ? 
                        <div>
                            <h1>cidade</h1>
                            <select 
                                name="city" 
                                id="city" 
                                required
                                onChange={(ev) => setLocalidade(Number(ev.target.value))}
                            >
                                <option selected key={0} value={0}>selecione um município</option>
                                {cities.map((cur) =>
                                    <option key={cur.id}
                                        value={cur.id}
                                    >{cur.nome}</option>
                                )}
                            </select>
                        </div> : <></>}
                    {isLocalidadeDefined() ? 
                        <div>
                            <h1>período</h1>
                            <select
                                name="periodo"
                                id="periodo"
                                required
                                onChange={(ev) => setPeriodo(ev.target.value)}
                                >
                                    <option selected key='' value=''>selecione um período</option>
                                    {periodos.map((cur) =>
                                        <option key={cur.code}
                                            value={cur.code}
                                        >{cur.name}</option>
                                    )}
                            </select>
                        </div> : <></>}
                    {isPeriodoDefined() ?
                        <div>
                             <br/>
                             <button onClick={() => 
                                 history.push(`/show-cidade/${localidade}/${periodo}`)}
                             >consultar</button>
                        </div>: <></>
                    }
                </form>
            </CenteredBlock>
        </div>
    )
}

export default Home