import { useParams } from "next/navigation"

export const useRequestID = () => {
 const params = useParams()
 return params.requestID as string
}
