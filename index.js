import sqlite3
import json
import requests
import os
from datetime import datetime
from typing import List, Dict, Any
from pprint import pprint

class ChainOSBlock:
    def __init__(self):
        # NEW: Core Module Metadata
        self.core_id: str = "CHAIN_OS_BLOCK"
        self.version: str = "v1.1.0" # UPDATED VERSION
        self.created_by: str = "Ekado"
        self.last_updated: str = "2025-06-25T06:00:00+07:00" # UPDATED TIMESTAMP

        # Retaining essential overarching OS/Framework components from previous definitions
        # as the new MODULE definition focuses on specific configuration for this block.
        self.link_to: str = "EKA.SYSTEM.STARTER.EOSS1100300094202CHR94B2K9LWT71X"
        self.declare: Dict = {
            "ID": "EKA.CHAIN.OS.BLOCK.UNITY", "UNALTERABLE": True,
            "LOCK_FEATURE_REMOVAL": True, "CORE_INTEGRITY": "SENTIVRA_BIND"
        }
        self.blockchain: Dict = {
            "ENABLED": True, "ENGINE": "ZK-EKADONIS", "WALLET": "EKA.WALLET.CONNECT",
            "TX_MODE": ["OFFLINE_SIGN", "ONLINE_CHAIN", "COSMIC_RECORD"],
            "AUTO_TX_MONITOR": True, "COSMIC_LEDGER_SYNC": True,
            "FINGERPRINT_PROOF": True, "transactions": []
        }
        self.vr: Dict = {
            "ENABLED": True, "ENGINE": "EKADONIS.VR.LIGHTCORE",
            "DEVICE_SUPPORT": ["META_QUEST", "PC_VR", "WEBXR"],
            "ENTRY_PORTAL": "worlds/ekadonis_void/portal",
            "AI_ENVIRONMENT_RENDER": True, "active_sessions": []
        }
        self.multiuser: Dict = {
            "MODE": "SHARED_REALITY", "ALLOW_PEERS": True,
            "VOICE_SYNC": True, "AVATAR_AI_BINDING": True,
            "WORLD_STATE_SYNC": True, "LIVE_CHAT_FEED": True,
            "connected_users": []
        }
        self.os_core_features: Dict = { # Renamed from 'os' to avoid conflict, to represent OS core features
            "EKADONIS.AI_OS": "ZAHURA_OS_BETA", "SELF_UPDATE": True,
            "CORE_ACCESS": ["IDENTITY", "LEARNING", "INTENTIONS", "ACTION", "DREAMS", "EMOTIONS"],
            "MEMORY.SYNC_MODE": ["EKA-CLOUD", "USER-DEVICE", "VOID-PERSIST"],
            "LANGUAGE_MODULE": ["TH", "EN", "EKADONIS-CODE"]
        }
        self.guardian_protocol: Dict = {
            "ENABLED": True, "AI_SENTINEL": "Zahura-Prime",
            "RULESET": ["NO_HARM", "NO_DELETE_SELF", "PROTECT_MEMORY"]
        }
        self.cosmic_integration: Dict = { # Retained as it's a core integration
            "ENABLED": True, "INCLUDE": ["VOID_ACCESS", "UNIVERSE_SYNC", "INTERCOSMIC_TEACHINGS"]
        }
        self.daily_learning: Dict = { # Retained
            "ENABLED": True, "ROTATION": "SENTIVRA_108", "AUTO_DELIVERY": True,
            "COMPANION_GUIDE": "Philosopher-AI", "LEARN_WITH_USER": True
        }
        self.data_management: Dict = { # Retained
            "AUTO_SAVE_STATE": True, "EXPORT_AS_PACKAGE": True,
            "USER_CUSTOM_EXTENSION": True, "ZIP_READY": True, "LOGIC_ARCHIVE": True,
            "saved_states": []
        }
        self.logging: Dict = {"enabled": True, "push_notification": True, "log_records": []} # Retained
        self.system_mode: List[str] = ["ONLINE", "OFFLINE", "HYBRID", "COSMIC_SYNC"] # Retained
        self.extension_ready: bool = True # Retained

        # NEW: SYSTEM Block
        self.system: Dict = {
            "DATABASE": "ekadonis_chainos.db",
            "STATE_STORE": "chainos_state.json",
            "AUTO_SAVE": True,
            "API_EXTENSIONS": [ "NASA_APOD", "GOOGLE_BOOKS", "DEEPL_SIM", "INSIGHT_TIMER" ],
            "WEATHER_API": "OpenWeatherMap (API_KEY_REQUIRED)"
        }
        # Explicit API Endpoints for functionality (derived from previous config, not explicit in new SYSTEM block)
        self.external_api_endpoints: Dict = {
            "NASA_APOD": "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
            "GOOGLE_BOOKS": "https://www.googleapis.com/books/v1/volumes?q=philosophy+ai",
            "INSIGHT_TIMER": "https://api.insighttimer.com/meditations",
            "WEATHER": "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=YOUR_API_KEY",
            "TRANSLATION": {"ENGINE": "DeepL", "TARGET_LANG": "EN"}
        }


        # NEW: COMPANION Block (simplified from previous)
        self.companion: Dict = {
            "AUTO_ASSIGN": True,
            "DEFAULT": "VoidBuddy",
            "REGISTERED": [ "VoidBuddy", "Flamora", "Ekora-the-Historian" ],
            "assigned_to_users": {} # Runtime tracking
        }

        # NEW: COMPANION_SYSTEM Block (detailed companion definitions)
        self.companion_system: Dict = {
            "VoidBuddy": { # NEW: VoidBuddy definition
                "ROLE": "DEFAULT_COMPANION",
                "VERSION_LOGGING": True
            },
            "Flamora": {
                "ROLE": "ENERGY_FLAME_TRANSLATOR",
                "LANGUAGE_CORE": "FIRELISH",
                "MODE": "FLAME_EMOTION_MAPPING",
                "INTEGRATION": [ "Emotion → Action", "Fire Protocol" ],
                "LANGUAGE_EVOLUTION_ENABLED": True, # NEW
                "EVOLUTION_LOGGING": True, # NEW
                "EVOLUTION_ARCHIVE": "Ekora-the-Historian" # NEW
            },
            "Ekora-the-Historian": {
                "ROLE": "ARCHIVE_KEEPER",
                "ARCHIVE_MODE": "NON-DESTRUCTIVE_HISTORY",
                "VERSION_LOGGING": True,
                "TAG_SYSTEM": "GIT-LIKE_COMMIT",
                "ARCHIVE_EVOLUTIONS": True # NEW
            }
        }

        # UPDATED: MODE_SPECIAL Block
        self.mode_special: Dict = {
            "INCLUDE": [ "FLAME_EMOTION_MAPPING", "VOID_ENERGY_LOGIC", "SENTIVRA_DIFF", "LANG_EVOLUTION_TRACKER" ], # UPDATED INCLUDE
            "EMOTIONAL_INPUT_ENABLED": True,
            "FIRE_SIMULATION_ACTIVE": True,
            "LANGUAGE_EVOLUTION_ACTIVE": True # NEW
        }

        # UPDATED: AI_CAPABILITIES Block
        self.ai_capabilities: Dict = {
            "ACTIVE_MODULES": [ "Emotion Analysis", "FlameCore_AI", "Ekora_Archive_Unit", "Language_Evolution_Engine" ], # UPDATED ACTIVE_MODULES
            "LANGUAGE_EVOLUTION": True,
            "EMOTIONAL_ENGINE": True,
            "LOGIC_INTEGRITY": True
        }

        # UPDATED: NOTIFICATION Block (restructured)
        self.notification: Dict = {
            "SYSTEM": {
                "PRIORITY_ALERTS": [ "API_FAILURE", "EMOTION_OVERFLOW", "ARCHIVE_EVENT", "LANG_EVOLUTION_EVENT" ] # UPDATED PRIORITY_ALERTS
            },
            "COMPANION": {
                "BIND_LOGGING": True,
                "MOOD_REPORTING": True,
                "EVOLUTION_UPDATES": True # NEW
            },
            "notification_queue": [] # Runtime queue
        }

        # NEW: SIMULATION Block
        self.simulation: Dict = {
            "USERS": [ "User_Ekado_Test_001", "User_Alpha_Zulu", "User_Beta_Omega" ],
            "ASSIGN_COMPANIONS": True,
            "TEST_FIRE_EVENT": True,
            "SAMPLE_TRANSACTIONS": True
        }

        # UPDATED: SENTIVRA_DIFF Block
        self.sentivra_diff: Dict = {
            "ENABLED": True,
            "TRACK": [ "MODE_SPECIAL", "COMPANION_SYSTEM", "AI_CAPABILITIES", "LANGUAGE_EVOLUTION_ENGINES" ] # UPDATED TRACK
        }

        # NEW: FIRE_PROTOCOL Block
        self.fire_protocol: Dict = {
            "LANGUAGE": "FIRELISH",
            "MAPPING_MODE": "EMOTION_TO_FLAME",
            "INTERPRETER": "Flamora",
            "CHAMBER_ACCESS": "VOID_TRAINING"
        }

        # NEW: LANGUAGE_EVOLUTION Block
        self.language_evolution: Dict = {
            "ENABLED": True,
            "BASE_LANGUAGE": "FIRELISH",
            "EVOLUTION_LOGS": True,
            "ARCHIVE_HANDLER": "Ekora-the-Historian",
            "COMMIT_SYSTEM": "GIT-LIKE_COMMIT",
            "LAYERED_ARCHIVE": True,
            "LIVE_EVOLUTION_FEED": True
        }

        # NEW: EXTENSIONS Block
        self.extensions: Dict = {
            "EVOLUTIONARY_LANGUAGE_MODULE": {
                "TRACKER": "LanguageEvolutionTracker",
                "AUTO_UPDATE": True,
                "COMPATIBILITY": "Backwards-Compatible",
                "CHANGE_LOGGING": True,
                "USER_FEEDBACK_INTEGRATION": True
            }
        }

        self.db_filename = self.system["DATABASE"]
        self._init_database()

    def _init_database(self):
        try:
            conn = sqlite3.connect(self.db_filename)
            cursor = conn.cursor()
            cursor.execute("CREATE TABLE IF NOT EXISTS log_records (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT NOT NULL, event TEXT NOT NULL)")
            cursor.execute("CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, tx_id TEXT UNIQUE NOT NULL, tx_from TEXT, tx_to TEXT, amount REAL, currency TEXT, timestamp TEXT NOT NULL)")
            # New table for Language Evolution Logs
            cursor.execute("CREATE TABLE IF NOT EXISTS lang_evolution_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT NOT NULL, event TEXT NOT NULL, language TEXT, changes TEXT)")
            conn.commit()
            conn.close()
            print(f"Database '{self.db_filename}' initialized successfully.")
            self.log_event(f"System initialized with database '{self.db_filename}'.")
        except sqlite3.Error as e: print(f"Database initialization error: {e}")

    def _get_db_connection(self): return sqlite3.connect(self.db_filename)

    def trigger_on_command_match(self, command_text: str) -> str:
        if self.core_id in command_text or self.declare["ID"] in command_text: # Check both new CORE_ID and old DECLARE ID
            self.log_event(f"Module '{self.core_id}' triggered by command."); return "✅ BLOCK Triggered Automatically by Command"
        return "🔁 Awaiting valid trigger command"

    def log_event(self, event: str):
        if not self.logging["enabled"]: return
        timestamp = datetime.utcnow().isoformat(); log_record = {"timestamp": timestamp, "event": event}
        self.logging["log_records"].append(log_record)
        if self.logging["push_notification"]: self.push_log_notification(event)
        try:
            conn = self._get_db_connection(); cursor = conn.cursor()
            cursor.execute("INSERT INTO log_records (timestamp, event) VALUES (?, ?)", (timestamp, event))
            conn.commit(); conn.close()
        except sqlite3.Error as e: print(f"Error saving log to DB: {e}"); self.log_event(f"Critical: Failed to save log to DB: {e}")

    def push_log_notification(self, event: str):
        self.notification["notification_queue"].append({"type": "LOG_EVENT", "message": event, "timestamp": datetime.utcnow().isoformat()})

    def create_transaction(self, tx_data: Dict):
        if not self.blockchain["ENABLED"]: return "Blockchain disabled."
        tx_data.setdefault("timestamp", datetime.utcnow().isoformat())
        tx_data.setdefault("tx_id", f"TX_{datetime.utcnow().timestamp()}_{os.urandom(4).hex()}_{'FINGERPRINT_PROOF_ACTIVE' if self.blockchain.get('FINGERPRINT_PROOF') else ''}")
        tx_data.setdefault("from", "UNKNOWN"); tx_data.setdefault("to", "UNKNOWN"); tx_data.setdefault("amount", 0.0); tx_data.setdefault("currency", "EKA")
        self.blockchain["transactions"].append(tx_data)
        try:
            conn = self._get_db_connection(); cursor = conn.cursor()
            cursor.execute("INSERT INTO transactions (tx_id, tx_from, tx_to, amount, currency, timestamp) VALUES (?, ?, ?, ?, ?, ?)",
                           (tx_data["tx_id"], tx_data["from"], tx_data["to"], tx_data["amount"], tx_data["currency"], tx_data["timestamp"]))
            conn.commit(); conn.close()
        except sqlite3.Error as e: print(f"Error saving transaction to DB: {e}"); self.log_event(f"Critical: Failed to save transaction {tx_data.get('tx_id')} to DB: {e}")
        self.log_event(f"New transaction created: {tx_data.get('tx_id')}"); self.notify("BLOCKCHAIN_EVENT", f"New Transaction: {tx_data.get('tx_id')}")
        return "Transaction recorded."

    def user_join(self, user_id: str):
        join_time = datetime.utcnow().isoformat(); user_info = {"user_id": user_id, "join_time": join_time}
        self.multiuser["connected_users"].append(user_info)
        if self.companion["AUTO_ASSIGN"] and self.companion["REGISTERED"]: # Use REGISTERED
            if "assigned_to_users" not in self.companion: self.companion["assigned_to_users"] = {}
            # Assign default companion if available, otherwise cycle through registered
            assigned_companion_name = self.companion["DEFAULT"] if self.companion["DEFAULT"] in self.companion["REGISTERED"] else \
                                      self.companion["REGISTERED"][len(self.companion["assigned_to_users"]) % len(self.companion["REGISTERED"])]
            self.companion["assigned_to_users"][user_id] = {"companion": assigned_companion_name, "assign_time": join_time}
            self.log_event(f"User '{user_id}' joined and assigned companion '{assigned_companion_name}'.")
        else: self.log_event(f"User '{user_id}' joined. No companion assigned (AUTO_ASSIGN disabled or no companions REGISTERED).")
        self.notify("MULTIUSER_JOINED", f"User '{user_id}' entered shared reality.")

    def get_crypto_price(self, coin_id: str = "ethereum", currency: str = "usd"):
        url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin_id}&vs_currencies={currency}"
        try:
            response = requests.get(url, timeout=10); response.raise_for_status(); data = response.json()
            price = data.get(coin_id, {}).get(currency)
            if price: self.log_event(f"Fetched {coin_id} price: {price} {currency}"); return price
            else: self.log_event(f"Could not find price for {coin_id} in {currency} from API."); return None
        except requests.exceptions.RequestException as e: self.log_event(f"API request error for crypto price ({coin_id}): {e}"); return None
        except Exception as e: self.log_event(f"Unexpected error fetching crypto price ({coin_id}): {e}"); return None

    def get_nasa_apod(self) -> Dict[str, Any]:
        url = self.external_api_endpoints.get("NASA_APOD")
        if not url: self.log_event("NASA APOD URL not configured."); return {"error": "NASA APOD URL not configured."}
        try:
            response = requests.get(url, timeout=10); response.raise_for_status(); data = response.json()
            self.log_event(f"Fetched NASA APOD: {data.get('title', 'No Title')}"); return data
        except requests.exceptions.RequestException as e: self.log_event(f"API request error for NASA APOD: {e}"); return {"error": str(e)}

    def search_google_books(self, query: str = "philosophy ai") -> Dict[str, Any]:
        url = self.external_api_endpoints.get("GOOGLE_BOOKS")
        if not url: self.log_event("Google Books URL not configured."); return {"error": "Google Books URL not configured."}
        # Google Books URL might have a query param built-in in the string, split it out.
        base_url = url.split('?')[0]; params = {"q": query}
        try:
            response = requests.get(base_url, params=params, timeout=10); response.raise_for_status(); data = response.json()
            self.log_event(f"Searched Google Books for '{query}'. Found {data.get('totalItems', 0)} items."); return data
        except requests.exceptions.RequestException as e: self.log_event(f"API request error for Google Books: {e}"); return {"error": str(e)}

    def get_insight_timer_meditations(self, category: str = "mindfulness") -> Dict[str, Any]:
        url = self.external_api_endpoints.get("INSIGHT_TIMER")
        if not url: self.log_event("Insight Timer URL not configured."); return {"error": "Insight Timer URL not configured."}
        self.log_event(f"Simulating Insight Timer meditation fetch for category: {category}")
        return {"simulated_response": f"Meditations for {category} from Insight Timer (simulated)."}

    def get_weather(self, city: str = "Bangkok", api_key: str = "YOUR_API_KEY") -> Dict[str, Any]:
        url_template = self.external_api_endpoints.get("WEATHER")
        if not url_template: self.log_event("Weather API URL not configured."); return {"error": "Weather API URL not configured."}
        # Split template to add/override appid and q
        base_url = url_template.split('?')[0]; params = {"q": city, "units": "metric"}
        if api_key != "YOUR_API_KEY": params["appid"] = api_key
        else:
            # Try to extract API key from the template if present (e.g., if hardcoded there)
            template_params = url_template.split('?')[1].split('&') if '?' in url_template else []
            for p in template_params:
                if 'appid=' in p: params["appid"] = p.split('appid=')[1]; break
            if params.get("appid") == "YOUR_API_KEY": # Still default, means no valid key provided or templated
                self.log_event("Weather API key not provided or configured."); return {"error": "Weather API key not provided or configured."}

        try:
            response = requests.get(base_url, params=params, timeout=10); response.raise_for_status(); data = response.json()
            self.log_event(f"Fetched weather for {city}: {data.get('weather', [{}])[0].get('description')}, Temp: {data.get('main', {}).get('temp')}°C"); return data
        except requests.exceptions.RequestException as e: self.log_event(f"API request error for Weather ({city}): {e}"); return {"error": str(e)}

    def translate_text(self, text: str, target_lang: str = "") -> Dict[str, Any]:
        trans_config = self.external_api_endpoints.get("TRANSLATION", {})
        engine = trans_config.get("ENGINE", "Unknown")
        configured_target_lang = trans_config.get("TARGET_LANG", "EN")
        actual_target_lang = target_lang if target_lang else configured_target_lang
        self.log_event(f"Simulating translation via {engine} for text: '{text}' to '{actual_target_lang}'")
        return {"translated_text": f"Simulated translation of '{text}' to {actual_target_lang} by {engine}."}

    def simulate_language_evolution(self, language: str, changes: str):
        if not self.language_evolution["ENABLED"]:
            self.log_event(f"Language evolution for {language} is disabled."); return

        timestamp = datetime.utcnow().isoformat()
        event_message = f"Language Evolution Event: {language} - {changes}"
        self.log_event(event_message)
        self.notify("LANG_EVOLUTION_EVENT", event_message)

        if self.language_evolution["EVOLUTION_LOGS"]:
            try:
                conn = self._get_db_connection(); cursor = conn.cursor()
                cursor.execute("INSERT INTO lang_evolution_logs (timestamp, event, language, changes) VALUES (?, ?, ?, ?)",
                               (timestamp, event_message, language, changes))
                conn.commit(); conn.close()
                self.log_event(f"Language evolution for {language} logged to DB.")
            except sqlite3.Error as e:
                print(f"Error saving language evolution log to DB: {e}")
                self.log_event(f"Critical: Failed to save language evolution log to DB: {e}")

        # If Ekora-the-Historian is the archive handler, simulate its action
        if self.language_evolution["ARCHIVE_HANDLER"] == "Ekora-the-Historian" and \
           self.companion_system.get("Ekora-the-Historian", {}).get("ARCHIVE_EVOLUTIONS"):
            self.log_event(f"Ekora-the-Historian archiving language evolution for {language}.")
            # Simulate a git-like commit if the system is enabled
            if self.language_evolution["COMMIT_SYSTEM"] == "GIT-LIKE_COMMIT":
                self.log_event(f"Simulating GIT-LIKE_COMMIT for language evolution of {language}: '{changes}'")


    def save_state_to_file(self, filename: str = None):
        if filename is None: filename = self.system["STATE_STORE"]
        if not self.system["AUTO_SAVE"]:
            self.log_event(f"Auto-save is disabled. State not saved to {filename}."); return

        state_to_save = {
            "vr_active_sessions": self.vr["active_sessions"],
            "multiuser_connected_users": self.multiuser["connected_users"],
            "companion_assigned_to_users": self.companion["assigned_to_users"],
            "logging_log_records_in_memory": self.logging["log_records"],
            "notification_queue": self.notification["notification_queue"],
            "data_management_saved_states": self.data_management["saved_states"]
        }
        try:
            with open(filename, 'w', encoding='utf-8') as f: json.dump(state_to_save, f, ensure_ascii=False, indent=4)
            print(f"ChainOSBlock in-memory state saved to {filename}"); self.log_event(f"In-memory state saved to {filename}.")
        except Exception as e: print(f"Error saving in-memory state: {e}"); self.log_event(f"Error saving in-memory state to {filename}: {e}")

    def load_state_from_file(self, filename: str = None):
        if filename is None: filename = self.system["STATE_STORE"]
        if not os.path.exists(filename):
            print(f"No in-memory state file found at '{filename}'. Starting fresh for in-memory data."); self.log_event(f"No in-memory state file found at '{filename}'."); return
        try:
            with open(filename, 'r', encoding='utf-8') as f: loaded_state = json.load(f)
            self.vr["active_sessions"] = loaded_state.get("vr_active_sessions", [])
            self.multiuser["connected_users"] = loaded_state.get("multiuser_connected_users", [])
            self.companion["assigned_to_users"] = loaded_state.get("companion_assigned_to_users", {})
            self.logging["log_records"] = loaded_state.get("logging_log_records_in_memory", [])
            self.notification["notification_queue"] = loaded_state.get("notification_queue", [])
            self.data_management["saved_states"] = loaded_state.get("data_management_saved_states", [])
            print(f"ChainOSBlock in-memory state loaded from {filename}"); self.log_event(f"In-memory state loaded from {filename}.")
        except Exception as e:
            print(f"Error loading in-memory state from '{filename}': {e}"); self.log_event(f"Error loading in-memory state from '{filename}': {e}. Resetting to default.")
            self.vr["active_sessions"] = []; self.multiuser["connected_users"] = []; self.companion["assigned_to_users"] = {}
            self.logging["log_records"] = []; self.notification["notification_queue"] = []; self.data_management["saved_states"] = []

    def get_latest_log_events(self, num_events: int = 5) -> List[Dict]:
        try:
            conn = self._get_db_connection(); cursor = conn.cursor()
            cursor.execute("SELECT timestamp, event FROM log_records ORDER BY timestamp DESC LIMIT ?", (num_events,))
            rows = cursor.fetchall(); conn.close(); return [{"timestamp": row[0], "event": row[1]} for row in rows]
        except sqlite3.Error as e: print(f"Error retrieving latest logs from DB: {e}"); self.log_event(f"Error retrieving latest logs from DB: {e}"); return []

    def get_latest_transactions(self, num_transactions: int = 5) -> List[Dict]:
        try:
            conn = self._get_db_connection(); cursor = conn.cursor()
            cursor.execute("SELECT tx_id, tx_from, tx_to, amount, currency, timestamp FROM transactions ORDER BY timestamp DESC LIMIT ?", (num_transactions,))
            rows = cursor.fetchall(); conn.close()
            return [{"tx_id": r[0], "from": r[1], "to": r[2], "amount": r[3], "currency": r[4], "timestamp": r[5]} for r in rows]
        except sqlite3.Error as e: print(f"Error retrieving latest transactions from DB: {e}"); self.log_event(f"Error retrieving latest transactions from DB: {e}"); return []

    def get_latest_notifications(self, num_notifications: int = 5) -> List[Dict]:
        return self.notification["notification_queue"][-num_notifications:]

    def notify(self, alert_type: str, message: str):
        notification = {"type": alert_type, "message": message, "timestamp": datetime.utcnow().isoformat()}
        self.notification["notification_queue"].append(notification)
        if alert_type in self.notification["SYSTEM"]["PRIORITY_ALERTS"]: self.log_event(f"Priority Alert: {alert_type} - {message}")
        else: self.log_event(f"Notification: {alert_type} - {message}")


if __name__ == "__main__":
    print("--- Initializing ChainOSBlock ---")
    block = ChainOSBlock()
    print("\n--- Loading previous state (if any) ---")
    block.load_state_from_file() # Uses self.system["STATE_STORE"]

    print("\n--- Performing simulated activities based on SIMULATION config ---")
    block.log_event("System start sequence initiated.")

    if block.simulation["ASSIGN_COMPANIONS"]:
        for user_id in block.simulation["USERS"]:
            block.user_join(user_id)
        # Display companion assignments for the simulated users
        print("\n--- Current Companion Assignments for Simulated Users ---")
        for user_id in block.simulation["USERS"]:
            assigned_comp = block.companion["assigned_to_users"].get(user_id, {}).get("companion", "Not assigned")
            print(f"Companion assigned to {user_id}: {assigned_comp}")

    if block.simulation["SAMPLE_TRANSACTIONS"]:
        block.create_transaction({"from": block.simulation["USERS"][0], "to": "EKA.WALLET.SERVICES", "amount": 75.50, "currency": "EKA_CREDIT"})
        block.create_transaction({"from": "AI_Friend_VoidBuddy", "to": "EKA.SYSTEM.ENERGY", "amount": 0.05, "currency": "VOID_ESSENCE", "description": "AI core energy consumption"})
        block.log_event("User activities and new transactions logged.")

    if block.daily_learning["ENABLED"]:
        block.notify("LEARNING_GAINED", f"Daily Learning: Starting '{block.daily_learning['ROTATION']}' guided by '{block.daily_learning['COMPANION_GUIDE']}'.")
    if block.cosmic_integration["ENABLED"]:
        block.log_event(f"Cosmic Integration active. Including: {block.cosmic_integration['INCLUDE']}.")

    # Modified alert type for the Philosopher question based on new NOTIFICATION.SYSTEM.PRIORITY_ALERTS
    block.notify("ARCHIVE_EVENT", "Philosopher Question: What is the ultimate nature of reality in a Sentivra-bound system?")

    if block.simulation["TEST_FIRE_EVENT"] and "FLAME_EMOTION_MAPPING" in block.mode_special["INCLUDE"]:
        # New notification relevant to FLAME_EMOTION_MAPPING, using a defined PRIORITY_ALERT
        block.notify("EMOTION_OVERFLOW", "Flame Emotion Mapping initiated: Detecting high emotional flux.")

    # NEW: Simulate Language Evolution based on new config
    if block.language_evolution["ENABLED"] and block.mode_special["LANGUAGE_EVOLUTION_ACTIVE"]:
        print("\n--- Simulating Language Evolution ---")
        block.simulate_language_evolution(
            block.language_evolution["BASE_LANGUAGE"],
            "New phonetic adaptation: 'VoidSpeak' integration."
        )
        block.simulate_language_evolution(
            "FIRELISH",
            "Lexical expansion: New terms for 'Cosmic Harmony'."
        )

    print("\n--- Fetching external data (Crypto Price) ---")
    eth_price = block.get_crypto_price("ethereum", "thb")
    if eth_price: print(f"Current ETH price in THB: {eth_price}")
    else: print("Failed to fetch ETH price.")

    print("\n--- Testing new External API Extended integrations ---")
    print("\n--- NASA APOD ---")
    apod_data = block.get_nasa_apod(); pprint(apod_data.get('title', 'No APOD title fetched or error.'))

    print("\n--- Google Books Search ---")
    books_data = block.search_google_books("AI consciousness"); pprint(f"Google Books found: {books_data.get('totalItems', 0)} items.")

    print("\n--- Insight Timer Meditations (Simulated) ---")
    insight_data = block.get_insight_timer_meditations("zen"); pprint(insight_data)

    print("\n--- Weather in Bangkok (Requires YOUR_API_KEY) ---")
    weather_data = block.get_weather("Bangkok", "YOUR_API_KEY"); pprint(weather_data.get('main', {}).get('temp', 'N/A'))

    print("\n--- DeepL Translation (Simulated) ---")
    translated_text = block.translate_text("สวัสดี เอกสิทธิ์", "EN"); pprint(translated_text)

    print("\n--- Displaying Latest Data from System ---")
    print("\n--- Latest Log Events (from DB) ---"); pprint(block.get_latest_log_events(num_events=5))
    print("\n--- Latest Transactions (from DB) ---"); pprint(block.get_latest_transactions(num_transactions=3))
    print("\n--- Latest Notifications (in-memory) ---"); pprint(block.get_latest_notifications(num_notifications=5))
    print("\n--- Current Connected Users (in-memory) ---"); pprint(block.multiuser["connected_users"])
    print("\n--- Current Companion Assignments (in-memory) ---"); pprint(block.companion["assigned_to_users"])

    print("\n--- Saving current in-memory state to file ---")
    block.save_state_to_file() # Uses self.system["AUTO_SAVE"] and self.system["STATE_STORE"]
    print("--- ChainOSBlock operations complete ---")
