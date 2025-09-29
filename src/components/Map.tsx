import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Restaurant coordinates (Walsall, UK)
  const restaurantCoords: [number, number] = [-1.984, 52.586]; // Ablewell St, Walsall

  const initializeMap = () => {
    if (!mapContainer.current || !accessToken.trim()) return;

    setIsLoading(true);
    
    try {
      // Set Mapbox access token
      mapboxgl.accessToken = accessToken.trim();
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: restaurantCoords,
        zoom: 16,
        pitch: 45,
        bearing: 0
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add restaurant marker
      const marker = new mapboxgl.Marker({
        color: '#f97316', // Primary orange color
        scale: 1.2
      })
        .setLngLat(restaurantCoords)
        .addTo(map.current);

      // Add popup with restaurant info
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false
      })
        .setLngLat(restaurantCoords)
        .setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm">Chaii Dosa Cafe</h3>
            <p class="text-xs text-gray-600">91-92 Ablewell St, Walsall WS1 2EU</p>
            <p class="text-xs text-gray-600 mt-1">Authentic Indian Cuisine</p>
          </div>
        `)
        .addTo(map.current);

      marker.setPopup(popup);

      // Show popup by default
      popup.addTo(map.current);

      map.current.on('load', () => {
        setIsLoading(false);
        setShowTokenInput(false);
      });

      map.current.on('error', (e) => {
        console.error('Map error:', e);
        setIsLoading(false);
        alert('Failed to load map. Please check your Mapbox token.');
      });

    } catch (error) {
      console.error('Map initialization error:', error);
      setIsLoading(false);
      alert('Failed to initialize map. Please check your Mapbox token.');
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Interactive Map Setup</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              To display the interactive map, please enter your Mapbox public token:
            </p>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter your Mapbox public token..."
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={initializeMap}
                disabled={!accessToken.trim() || isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? 'Loading...' : 'Load Map'}
              </Button>
            </div>
            <div className="mt-3 p-3 bg-muted/50 rounded-lg">
              <div className="flex items-start space-x-2">
                <ExternalLink className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-medium">Get your Mapbox token:</p>
                  <p className="text-muted-foreground">
                    1. Visit{' '}
                    <a 
                      href="https://mapbox.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      mapbox.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">2. Create account & find your public token in the Tokens section</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fallback Google Maps link */}
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">Or view our location on Google Maps:</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://maps.google.com/maps?q=91-92+Ablewell+St+Walsall+WS1+2EU', '_blank')}
              className="w-full"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-64">
          <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
          {isLoading && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Map;