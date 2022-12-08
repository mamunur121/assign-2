import useFetch from './useFetch'

export default function useDishes () {
    return useFetch('/dishes/', 'GET')
}