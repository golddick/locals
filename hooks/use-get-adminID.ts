import { useParams } from "next/navigation"

export const useAdminID = () => {
 const params = useParams()
 return params.adminID as string
}
