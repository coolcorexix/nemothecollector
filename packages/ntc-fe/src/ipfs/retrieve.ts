import { makeStorageClient } from './client';

export async function retrieve(cid: string): Promise<ArrayBuffer> {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  console.log('🚀 ~ file: retrieve.ts ~ line 9 ~ retrieve ~ res', res);

  const rb = res.body;
  const reader = rb.getReader();

  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        reader.read().then(({ done, value }) => {
          // If there is no more data to read
          if (done) {
            console.log('done', done);
            controller.close();
            return;
          }
          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          // Check chunks by logging to the console
          console.log(done, value);
          push();
        });
      }

      push();
    },
  });
  // Respond with our stream
  return new Response(stream, {
    headers: {
      'Content-Type': 'arraybuffer',
    },
  }).arrayBuffer();
}
