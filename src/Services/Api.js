const API_URL = "https://localhost:8000/customer/support";

export async function getCustomerList() {
    try {
        const res = await fetch(`${API_URL}/list`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
    
}

export async function customerUpdate() {
    try {
        const res = await fetch(`${API_URL}/update`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function customerCreate(customerId, customerName) {
    try {
        const res = await fetch(`${API_URL}/create?customer_id=${customerId}&customer_name=${customerName}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
