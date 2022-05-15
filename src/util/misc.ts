export function removeAccents(txt:string){
    return txt
    .replace(/[ÀÁÂÃÄÅ]/ig,'A')
    .replace(/[Ç]/ig,'C')
    .replace(/[ÈÉÊË]/ig,'E')
    .replace(/[ÌÍÎÏ]/ig,'I')
    .replace(/[ÒÓÔÕÖ]/ig,'O')
    .replace(/[ÙÚÛÜ]/ig,'U')
  
    .replace(/[àáâãäå]/ig,'a')
    .replace(/[ç]/ig,'c')
    .replace(/[èéêë]/ig,'e')
    .replace(/[ìíîï]/ig,'i')
    .replace(/[òóôõö]/ig,'o')
    .replace(/[ùúûü]/ig,'u')
    .trim()
  }