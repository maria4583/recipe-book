export const formatDate = date => {
    return Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'short'
    }).format(new Date(date))
}