package io.nstudio.plugins.exoplayer;

import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.TransferListener;

import android.support.annotation.Nullable;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class EncryptedFileDataSourceFactory implements DataSource.Factory {

  private Cipher mCipher;
  private SecretKeySpec mSecretKeySpec;
  private IvParameterSpec mIvParameterSpec;
  private TransferListener mTransferListener;

  public EncryptedFileDataSourceFactory(Cipher cipher, SecretKeySpec secretKeySpec, IvParameterSpec ivParameterSpec, @Nullable TransferListener listener) {
    mCipher = cipher;
    mSecretKeySpec = secretKeySpec;
    mIvParameterSpec = ivParameterSpec;
    mTransferListener = listener;
  }

  @Override
  public EncryptedFileDataSource createDataSource() {
    return new EncryptedFileDataSource(mCipher, mSecretKeySpec, mIvParameterSpec, mTransferListener);
  }
}
