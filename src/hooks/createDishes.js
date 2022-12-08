import useFetch from './useFetch'

export default function useCreateDishes (dish) {
    return useFetch('/dishes', 'PUT', dish)
}