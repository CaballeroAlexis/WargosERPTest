module.exports = () => {
    const data = { client: [] }
    // Create 1000 users
    for (let i = 0; i < 10; i++) {
      data.client.push({ id: i, 
      cod: `cod${i}`, 
      cuit_dni: `cuit_dni${i}`,
      business_name: `business_name${i}`,
      fantasy_name: `fantasy_name${i}`,
      address: `address${i}`,
      con_iva: `responsable_inscripto${i}`,
      primer_aviso: `primer_aviso${i}`,
      segundo_aviso: `segundo_aviso${i}`,
      tercer_aviso: `tercer_aviso${i}`,
      aviso_baja: `aviso_baja${i}`,
      aviso_corte: `aviso_corte${i}`,
      contacts: []}
    )
    }
    return data
  }
  

