export async function startFailedWorker(requestId) {
  console.error(
    "🚨🚨🚨 ALERTA CRÍTICO 🚨🚨🚨\n" +
      `Pedido ${requestId} falhou no processamento.\n` +
      "Ação necessária: verificação manual imediata."
  );
}
