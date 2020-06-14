import React, { useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import toast from '../../utils/toaster'
import axios from 'axios'
import CenteredBlock from '../../components/CenteredBlock'
import Topic from '../../components/Topic'

import './styles.css'

interface TransparenciaApiResult {
    dataReferencia: string
    municipio: {
        codigoIBGE: string,
        nomeIBGE: string
        uf: {
            sigla: string
            nome: string
        }
    },
    valor: number,
    quantidadeBeneficiados: number
}

const ListBeneficiarios = () => {
    let history = useHistory()
    const {cidadeId, periodo} = useParams()
    const id = parseInt(cidadeId)
    if (isNaN(id)) {
        toast.error("Recebido id de cidade que não é um número inteiro. Redirecionando para a página inicial...")
        history.push('/')
    }

    const [transparencia, setTransparencia] = useState<TransparenciaApiResult>()

    useEffect(() => {
        axios.get<TransparenciaApiResult[]>("https://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio", {
            params: {
                codigoIbge: id,
                mesAno: periodo
            }
        })
            .then((res) => {
                if (res.status !== 200) {
                    toast.error("Erro de servidor ao buscar informações do portal da transparência")
                    console.log(res.data)
                } else {
                    setTransparencia(res.data[0])
                }
            })
            .catch((err) => {
                toast.error("Erro ao buscar informações do portal da transparencia. Abra o console para mais detalhes.")
                console.log(err)
            })
    }, [id, periodo])

    const [demorandoParaCarregar, setDemorandoParaCarregar] = useState(false)
    setTimeout(() => {
        setDemorandoParaCarregar(true)
    }, 3000)

    const currencyFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'brl',
    }).format
    
    return (
        <CenteredBlock>
            {
                transparencia === undefined ?
                    <h1>{!demorandoParaCarregar ? "carregando..." : "eu ainda não desisti! carregando..."}</h1>
                :
                <div>
                    <h1>{transparencia.municipio.nomeIBGE.toLowerCase()} - {transparencia.municipio.uf.sigla.toLowerCase()} (ibge {transparencia.municipio.codigoIBGE})</h1>
                    <Topic topicKey="beneficiários" topicValue={transparencia.quantidadeBeneficiados}/>
                    <Topic topicKey="valor disponibilizado" topicValue={currencyFormatter(transparencia.valor)} />
                </div>

            }
        </CenteredBlock>
    )
}

export default ListBeneficiarios