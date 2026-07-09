package io.nstudio.plugins.contentful;

import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import android.util.Base64;
import android.os.Handler;
import android.os.Looper;

public class ContenfulFetchHelper {

    private static final ExecutorService executor = Executors.newCachedThreadPool();
    private static final Handler mainHandler = new Handler(Looper.getMainLooper());

    public interface FetchCallback {
        void onSuccess(String base64);
        void onFailure(Throwable t);
    }

    public static void fetchUrlToBase64Async(final String urlString, final FetchCallback cb) {
        executor.submit(new Runnable() {
            @Override
            public void run() {
                InputStream in = null;
                ByteArrayOutputStream baos = null;
                try {
                    URL url = new URL(urlString);
                    in = url.openStream();
                    baos = new ByteArrayOutputStream();
                    byte[] buffer = new byte[8192];
                    int n;
                    while ((n = in.read(buffer)) != -1) {
                        baos.write(buffer, 0, n);
                    }
                    byte[] bytes = baos.toByteArray();
                    final String b64 = Base64.encodeToString(bytes, Base64.NO_WRAP);
                    mainHandler.post(new Runnable() { public void run() { cb.onSuccess(b64); } });
                } catch (final Throwable t) {
                    mainHandler.post(new Runnable() { public void run() { cb.onFailure(t); } });
                } finally {
                    try { if (in != null) in.close(); } catch (Throwable _e) {}
                    try { if (baos != null) baos.close(); } catch (Throwable _e) {}
                }
            }
        });
    }

    public static void shutdown() {
        executor.shutdownNow();
    }
}
