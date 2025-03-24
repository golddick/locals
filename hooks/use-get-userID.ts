import { useParams } from "next/navigation"

export const useUserID = () => {
 const params = useParams()
 return params.id as string
}
