(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl Borrow&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl Borrow&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Borrow&lt;str&gt; for HeaderName","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Borrow&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; Borrow&lt;[T]&gt; for SliceVec&lt;'s, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Borrow&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["tonic"] = [{"text":"impl&lt;VE:&nbsp;ValueEncoding&gt; Borrow&lt;str&gt; for MetadataKey&lt;VE&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()