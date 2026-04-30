package io.nstudio.plugins.contentful;

import com.contentful.java.cda.CDAArray;
import com.contentful.java.cda.CDAEntry;
import com.contentful.java.cda.CDAAsset;
import com.contentful.java.cda.CDASpace;
import com.contentful.java.cda.SynchronizedSpace;
import com.contentful.java.cda.ResourceFactory;
import com.google.gson.Gson;
import com.contentful.java.cda.CDAClient;

import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.functions.Consumer;
import io.reactivex.rxjava3.core.Scheduler;
import io.reactivex.rxjava3.schedulers.Schedulers;


public class Contenful {

	private static Gson gson() {
		try {
			return ResourceFactory.createGson();
		} catch (Throwable t) {
			return new Gson();
		}
	}

	public static String entryToJson(CDAEntry entry) {
		if (entry == null) return null;
		try {
			return gson().toJson(entry);
		} catch (Throwable t) {
			return gson().toJson(simpleFallbackEntry(entry));
		}
	}

	public static String arrayToJson(CDAArray array) {
		if (array == null) return null;
		try {
			return gson().toJson(array);
		} catch (Throwable t) {
			return gson().toJson(simpleFallbackArray(array));
		}
	}

	public static String assetToJson(CDAAsset asset) {
		if (asset == null) return null;
		try {
			return gson().toJson(asset);
		} catch (Throwable t) {
			return gson().toJson(simpleFallbackAsset(asset));
		}
	}

	public static String synchronizedSpaceToJson(SynchronizedSpace space) {
		if (space == null) return null;
		try {
			return gson().toJson(space);
		} catch (Throwable t) {
			java.util.Map<String, Object> m = new java.util.HashMap<>();
			try {
				m.put("items", space.items());
			} catch (Throwable _e) {}
			try {
				m.put("nextSyncUrl", space.nextSyncUrl() != null ? space.nextSyncUrl() : null);
			} catch (Throwable _e) {}
			return gson().toJson(m);
		}
	}

	public static String spaceToJson(CDASpace space) {
		if (space == null) return null;
		try {
			return gson().toJson(space);
		} catch (Throwable t) {
			java.util.Map<String, Object> m = new java.util.HashMap<>();
			try { m.put("id", space.id()); } catch (Throwable _e) {}
			try { m.put("name", space.name()); } catch (Throwable _e) {}
			return gson().toJson(m);
		}
	}

	private static java.util.Map<String, Object> simpleFallbackEntry(CDAEntry entry) {
		java.util.Map<String, Object> m = new java.util.HashMap<>();
		m.put("id", entry.id());
		m.put("sys", entry.attrs() != null ? entry.attrs().get("sys") : null);
		m.put("fields", entry.rawFields());
		return m;
	}

	private static java.util.Map<String, Object> simpleFallbackArray(CDAArray array) {
		java.util.Map<String, Object> m = new java.util.HashMap<>();
		m.put("total", array.total());
		m.put("skip", array.skip());
		m.put("limit", array.limit());
		m.put("items", array.items());
		m.put("includes", array.entries());
		return m;
	}

	private static java.util.Map<String, Object> simpleFallbackAsset(CDAAsset asset) {
		java.util.Map<String, Object> m = new java.util.HashMap<>();
		m.put("id", asset.id());
		m.put("title", asset.title());
		m.put("mimeType", asset.mimeType());
		m.put("url", asset.url());
		return m;
	}


	public interface EntriesListener {
		void onNext(String json);
		void onError(Throwable t);
	}

	public interface ContentTypeCacheListener {
		void onNext(int n);
		void onError(Throwable t);
	}

	public static class Subscription {
		private final Disposable disposable;
		public Subscription(Disposable d) { this.disposable = d; }
		public void unsubscribe() { try { if (disposable != null && !disposable.isDisposed()) disposable.dispose(); } catch (Throwable _e) {} }
	}

	public static Subscription observeEntries(final CDAClient client, final EntriesListener listener) {
		try {
			Flowable<CDAArray> flow = client.observe(CDAEntry.class).all();
			Disposable d = flow.subscribeOn(Schedulers.io()).observeOn(Schedulers.computation()).subscribe(
				new Consumer<CDAArray>() {
					@Override
					public void accept(CDAArray arr) throws Throwable {
						try {
							String json = gson().toJson(arr);
							listener.onNext(json);
						} catch (Throwable t) { listener.onError(t); }
					}
				},
				new Consumer<Throwable>() {
					@Override
					public void accept(Throwable t) throws Throwable { listener.onError(t); }
				}
			);
			return new Subscription(d);
		} catch (Throwable t) {
			listener.onError(t);
			return new Subscription(null);
		}
	}

	public static Subscription observeContentTypeCachePopulation(final CDAClient client, final ContentTypeCacheListener listener) {
		try {
			Flowable<Integer> flow = client.observeContentTypeCachePopulation();
			Disposable d = flow.subscribeOn(Schedulers.io()).observeOn(Schedulers.computation()).subscribe(
				new Consumer<Integer>() {
					@Override
					public void accept(Integer v) throws Throwable {
						try { listener.onNext(v != null ? v.intValue() : 0); } catch (Throwable t) { listener.onError(t); }
					}
				},
				new Consumer<Throwable>() {
					@Override
					public void accept(Throwable t) throws Throwable { listener.onError(t); }
				}
			);
			return new Subscription(d);
		} catch (Throwable t) {
			listener.onError(t);
			return new Subscription(null);
		}
	}

	public interface EntriesFetchCallback {
		void onSuccess(String json);
		void onFailure(Throwable t);
	}

	@SuppressWarnings({"unchecked","rawtypes"})
	public static void fetchEntries(final CDAClient client, final java.util.Map params, final EntriesFetchCallback cb) {
		try {
			final com.contentful.java.cda.FetchQuery<com.contentful.java.cda.CDAEntry> q = client.fetch(com.contentful.java.cda.CDAEntry.class);

			if (params != null) {
				try {
					Object ct = params.get("content_type");
					if (ct != null) q.withContentType(String.valueOf(ct));
				} catch (Throwable _e) {}
				try {
					Object lim = params.get("limit");
					if (lim instanceof Number) q.limit(((Number)lim).intValue());
					else if (lim != null) q.limit(Integer.parseInt(String.valueOf(lim)));
				} catch (Throwable _e) {}
				try {
					Object sk = params.get("skip");
					if (sk instanceof Number) q.skip(((Number)sk).intValue());
					else if (sk != null) q.skip(Integer.parseInt(String.valueOf(sk)));
				} catch (Throwable _e) {}
				try {
					Object inc = params.get("include");
					if (inc instanceof Number) q.include(((Number)inc).intValue());
					else if (inc != null) q.include(Integer.parseInt(String.valueOf(inc)));
				} catch (Throwable _e) {}
				try {
					Object ord = params.get("order");
					if (ord != null) q.orderBy(String.valueOf(ord));
				} catch (Throwable _e) {}
				try {
					Object sel = params.get("select");
					if (sel instanceof java.util.List) {
						java.util.List selList = (java.util.List) sel;
						try {
							String[] arr = (String[]) selList.toArray(new String[0]);
							q.select(arr);
						} catch (Throwable _e) {
							q.select(String.join(",", toStringList(selList)));
						}
					} else if (sel != null) q.select(String.valueOf(sel));
				} catch (Throwable _e) {}
				try {
					Object where = params.get("where");
					if (where instanceof java.util.Map) {
						java.util.Map whereMap = (java.util.Map) where;
						for (Object keyObj : whereMap.keySet()) {
							String key = String.valueOf(keyObj);
							Object v = whereMap.get(keyObj);
							if (v instanceof java.util.List) {
								q.where(key, String.join(",", toStringList((java.util.List)v)));
							} else {
								q.where(key, String.valueOf(v));
							}
						}
					}
				} catch (Throwable _e) {}
			}

			q.all(new com.contentful.java.cda.CDACallback<com.contentful.java.cda.CDAArray>() {
				@Override
				public void onSuccess(com.contentful.java.cda.CDAArray array) {
					try {
						String json = gson().toJson(array);
						cb.onSuccess(json);
					} catch (Throwable t) {
						try {
							java.util.Map<String,Object> m = new java.util.HashMap<>();
							try { m.put("total", array.total()); } catch (Throwable _e) {}
							try { m.put("items", array.items()); } catch (Throwable _e) {}
							cb.onSuccess(gson().toJson(m));
						} catch (Throwable t2) { cb.onFailure(t2); }
					}
				}

				@Override
				public void onFailure(Throwable t) {
					cb.onFailure(t);
				}
			});
		} catch (Throwable t) {
			cb.onFailure(t);
		}
	}

	private static java.util.List<String> toStringList(java.util.List list) {
		java.util.List<String> out = new java.util.ArrayList<>();
		for (Object o : list) out.add(String.valueOf(o));
		return out;
	}

}

