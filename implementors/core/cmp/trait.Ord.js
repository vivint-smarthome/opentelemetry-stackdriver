(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl Ord for Bytes","synthetic":false,"types":[]},{"text":"impl Ord for BytesMut","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Ord for NaiveDate","synthetic":false,"types":[]},{"text":"impl Ord for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Ord for IsoWeek","synthetic":false,"types":[]},{"text":"impl Ord for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L:&nbsp;Ord, R:&nbsp;Ord&gt; Ord for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for AllowStdIo&lt;T&gt;","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Ord for HeaderValue","synthetic":false,"types":[]},{"text":"impl Ord for StatusCode","synthetic":false,"types":[]},{"text":"impl Ord for Version","synthetic":false,"types":[]}];
implementors["httpdate"] = [{"text":"impl Ord for HttpDate","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Ord for Interest","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["opentelemetry"] = [{"text":"impl Ord for Key","synthetic":false,"types":[]}];
implementors["opentelemetry_stackdriver"] = [{"text":"impl Ord for FieldBehavior","synthetic":false,"types":[]},{"text":"impl Ord for History","synthetic":false,"types":[]},{"text":"impl Ord for Type","synthetic":false,"types":[]},{"text":"impl Ord for Type","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["prost_types"] = [{"text":"impl Ord for Type","synthetic":false,"types":[]},{"text":"impl Ord for Label","synthetic":false,"types":[]},{"text":"impl Ord for OptimizeMode","synthetic":false,"types":[]},{"text":"impl Ord for CType","synthetic":false,"types":[]},{"text":"impl Ord for JsType","synthetic":false,"types":[]},{"text":"impl Ord for IdempotencyLevel","synthetic":false,"types":[]},{"text":"impl Ord for Kind","synthetic":false,"types":[]},{"text":"impl Ord for Cardinality","synthetic":false,"types":[]},{"text":"impl Ord for Syntax","synthetic":false,"types":[]},{"text":"impl Ord for NullValue","synthetic":false,"types":[]},{"text":"impl Ord for Feature","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Ord for Duration","synthetic":false,"types":[]},{"text":"impl Ord for Timespec","synthetic":false,"types":[]},{"text":"impl Ord for SteadyTime","synthetic":false,"types":[]},{"text":"impl Ord for Tm","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; Ord for SliceVec&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Ord for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Ord for Instant","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl Ord for BytesCodec","synthetic":false,"types":[]},{"text":"impl Ord for LinesCodec","synthetic":false,"types":[]}];
implementors["tonic"] = [{"text":"impl&lt;VE:&nbsp;ValueEncoding&gt; Ord for MetadataValue&lt;VE&gt;","synthetic":false,"types":[]}];
implementors["tower"] = [{"text":"impl Ord for Count","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Url","synthetic":false,"types":[]}];
implementors["yup_oauth2"] = [{"text":"impl Ord for AccessToken","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()